AFRAME.registerComponent('camerazoom', {
    schema:{
        moveZ:{type:'number', default:10}
    },
    tick:function(){
        // window.addEventListener('click', (e) => {
        //     this.data.moveY += 0.005
        // })
        this.data.moveZ += 0.1
        var position = this.el.getAttribute('position')
        position.z = this.data.moveZ
        this.el.setAttribute('position', {x:position.x, y:position.y, z:position.z})
    }
})

AFRAME.registerComponent('detach', {
    schema:{
        moveY:{type:'number', default:0}
    },

    tick:function(){
        window.addEventListener('click', (e) => {
            this.data.moveY -= 0.001
        })
        var position = this.el.getAttribute('position')
        position.y = position.y + this.data.moveY
        this.el.setAttribute('position', {x:position.x, y:position.y, z:position.z})
    }
})