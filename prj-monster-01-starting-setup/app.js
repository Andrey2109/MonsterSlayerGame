function randomDamage(min, max){
    return Math.floor.Math.random() * (max -min) + min;
}

const app = Vue.createApp({
    data(){
        return{
            playerHealth: 100,
            monsterHealth: 100
        }
    },
    methods: {
        attackPlayer(){
            let damage =randomDamage(5, 12)
            this.playerHealth -= damage
            this.attackMonster()
        },
        attackMonster(){
            let damage = randomDamage(8, 15)
            this.monsterHealth -= damage
        }
    }

})

app.mount('#game')