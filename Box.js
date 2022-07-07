AFRAME.registerComponent('box', {
    schema:{
        moveY:{type:'number', default:0.1}
    },
    tick:function(){
        // window.addEventListener('click', (e) => {
        //     this.data.moveY += 0.005
        // })
        var position = this.el.getAttribute('position')
        this.data.moveY += 0.00001
        position.y = position.y + this.data.moveY
        this.el.setAttribute('position', {x:position.x, y:position.y, z:position.z})
    }
})