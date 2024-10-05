function randomDamage(min, max){
    return Math.floor(Math.random() * (max -min) + min);
}

const app = Vue.createApp({
    data(){
        return{
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0
        }
    },
    computed:{
        monsterClassStyle(){
            return {width: this.monsterHealth + '%'}
        },
        playerClassStyle(){
            return {width: this.playerHealth + '%'}
        },
        specialAttackEnabled(){
            return this.currentRound % 3 !==0;
        }
    },
    methods: {
        attackPlayer(){
            const damage =randomDamage(5, 12)
            this.playerHealth -= damage
        },
        attackMonster(){
            this.currentRound++;
            const damage = randomDamage(8, 15)
            this.monsterHealth -= damage
            this.attackPlayer()
        },
        specialAttackMonster(){
            this.currentRound++;
            const damage = randomDamage(12, 25)
            this.monsterHealth -= damage
            this.attackPlayer()

        }
    }

})

app.mount('#game')