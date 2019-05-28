<template>
  <div>
    <canvas id="sketch" />
  </div>
</template>

<script>
export default {
  name: 'CanvasAnimate',
  data () {
    return {
      circleList: [
        {
          x: 100,
          y: 50,
          radius: 200,
          alpha: 0.25
        },
        {
          x: 300,
          y: 400,
          radius: 130,
          alpha: 0.12
        },
        {
          x: 1600,
          y: 720,
          radius: 200,
          alpha: 0.3
        },
        {
          x: 1200,
          y: 820,
          radius: 120,
          alpha: 0.1
        },
        {
          x: 70,
          y: 1680,
          radius: 120,
          alpha: 0.3
        },
        {
          x: 1200,
          y: 420,
          radius: 120,
          alpha: 0.3
        },
        {
          x: 2000,
          y: 400,
          radius: 130,
          alpha: 0.12
        },
        {
          x: 2600,
          y: 720,
          radius: 200,
          alpha: 0.3
        },
        {
          x: 3200,
          y: 820,
          radius: 120,
          alpha: 0.1
        },
      ],
      bg: {
        x: 0,
        y: 0
      }
    }
  },
  mounted () {
    this.initAnimate()

    const deviceX = document.querySelector('#app').clientWidth
    const deviceY = document.querySelector('#app').clientHeight
    document.addEventListener('mousemove', event => {
      this.bgEffect(event.clientX, event.clientY, deviceX, deviceY)
    })
  },
  methods: {
    bgEffect (x, y, deviceX, deviceY) {
      this.bg.x = (x - (deviceX / 2)) * 0.05
      this.bg.y = (y - (deviceY / 2)) * 0.05
    },

    initAnimate () {
      window.requestAnimationFrame(this.initAnimate)
      const ctx = document.querySelector('canvas#sketch').getContext('2d')
      ctx.canvas.width = document.querySelector('#app').clientWidth
      ctx.canvas.height = document.querySelector('#app').clientHeight
      this.drawAnimate(ctx)
    },

    drawAnimate (ctx) {
      this.drawBackground(ctx)
      this.circleList.forEach(ele => this.drawCircle(ctx, ele.x + this.bg.x, ele.y + this.bg.y, ele.radius, ele.alpha))
    },

    drawBackground (ctx) {
      ctx.fillStyle = '#373346'
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    },

    drawCircle (ctx, x, y, radius, alpha) {
      const grad = ctx.createRadialGradient(x, y, 0, x, y, radius)
      grad.addColorStop(0, `rgba(0, 255, 240, ${alpha}`)
      grad.addColorStop(0.5, `rgba(0, 255, 240, ${alpha * 0.75}`)
      grad.addColorStop(1, `rgba(0, 255, 240, 0`)
      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2, true)
      ctx.fill()
    }
  }
}
</script>

<style lang="stylus" scoped>
canvas#sketch
  position absolute
  width 100%
  min-height 100vh
  top 0
  z-index -1
</style>
