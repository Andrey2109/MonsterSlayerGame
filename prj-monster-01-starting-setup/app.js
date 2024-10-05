function randomDamage(min, max){
    return Math.floor(Math.random() * (max -min) + min);
}

const app = Vue.createApp({
    data(){
        return{
            playerHealth: 100,
            monsterHealth: 100
        }
    },
    computed:{
        monsterClassStyle(){
            return {width: this.monsterHealth + '%'}
        },
        playerClassStyle(){
            return {width: this.playerHealth + '%'}
        }
    },
    methods: {
        attackPlayer(){
            let damage =randomDamage(5, 12)
            this.playerHealth -= damage
        },
        attackMonster(){
            let damage = randomDamage(8, 15)
            this.monsterHealth -= damage
            this.attackPlayer()
        }
    }

})

app.mount('#game')