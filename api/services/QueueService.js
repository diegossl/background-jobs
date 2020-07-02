const Queue = require('bull')
const RedisConfig = require('../../config/Redis')
const jobs = require('../jobs/index')

const queues = Object.values(jobs).map(job => ({
  bull: new Queue(job.key, RedisConfig),
  name: job.key,
  handle: job.handle
}))

module.exports = { 
  queues,
  add(name, data) {
    const queue = this.queues.find(queue => queue.name === name)
    return queue.bull.add(data)
  },
  process() {
    return this.queues.forEach(queue => {
      queue.bull.process(queue.handle)

      queue.bull.on('failed', (job, err) => {
        console.log('Job failed', queue.key, job.data)
        console.log(err)
      })
    })
  }
}