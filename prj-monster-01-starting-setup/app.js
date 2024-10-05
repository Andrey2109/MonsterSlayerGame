function randomValue(min, max){
    return Math.floor(Math.random() * (max -min) + min);
}

const app = Vue.createApp({
    data(){
        return{
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages: []
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
    watch:{
        playerHealth(value){
            if (value <=0 && this.monsterHealth<=0){
                this.winner = 'draw'
            } else if (this.monsterHealth<=0){
                this.winner = 'player'
            }
        },
        monsterHealth(value){
            if (value <=0 && this.playerHealth<=0){
                this.winner = "draw"
            } else if (this.playerHealth<=0){
                this.winner = 'monster'
            }
        }
    },
    methods: {
        attackPlayer(){
            const damage =randomValue(5, 13)
            this.playerHealth -= damage
            this.addLogMessage('Monster', 'Attack', damage)
        },
        attackMonster(){
            this.currentRound++;
            const damage = randomValue(6, 13)
            this.monsterHealth -= damage
            this.addLogMessage('Player', 'Attack', damage)
            this.attackPlayer()
            
        },
        specialAttackMonster(){
            this.currentRound++;
            const damage = randomValue(12, 25)
            this.monsterHealth -= damage
            this.addLogMessage('Player', 'Attack', damage)
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
            this.addLogMessage('Player', 'heal', healValue)
            this.attackPlayer()
            
        },
        startNewGame(){
            this.playerHealth= 100,
            this.monsterHealth= 100,
            this.currentRound= 0,
            this.winner= null,
            logMessages= []
        },
        surrenderGame(){
            this.winner = 'monster'
        },
        addLogMessage(who, what, value){
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value 
            })
        }
    }

})

app.mount('#game')