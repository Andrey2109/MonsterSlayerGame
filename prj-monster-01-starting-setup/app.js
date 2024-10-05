function randomValue(min, max){
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
            const damage =randomValue(5, 12)
            this.playerHealth -= damage
        },
        attackMonster(){
            this.currentRound++;
            const damage = randomValue(8, 15)
            this.monsterHealth -= damage
            this.attackPlayer()
        },
        specialAttackMonster(){
            this.currentRound++;
            const damage = randomValue(12, 25)
            this.monsterHealth -= damage
            this.attackPlayer()

        },
        healPlayer(){
            const healValue = randomValue(8, 20)
            this.currentRound++;
            if (this.playerHealth + healValue >= 100){
                this.playerHealth = 100
            } else{
                this.playerHealth += healValue
            }
            this.attackPlayer()
        }
    }

})

app.mount('#game')