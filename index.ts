function simulateMontyHall(numTrials: number, shouldSwitch: boolean) {
    let wins = 0;
    for (let i = 0; i < numTrials; i++) {
        const prizeDoor = Math.floor(Math.random() * 3);
        let playerChoice = Math.floor(Math.random() * 3);

        let openDoor;
        do {
            openDoor = Math.floor(Math.random() * 3);
        } while (openDoor === playerChoice || openDoor === prizeDoor);

        if (shouldSwitch) {
            let switchDoor;
            do {
                switchDoor = Math.floor(Math.random() * 3);
            } while (switchDoor === playerChoice || switchDoor === openDoor);
            playerChoice = switchDoor;
        }

        if (playerChoice === prizeDoor) {
            wins++;
        }
    }

    return (wins / numTrials) * 100;
}

const numTrials = 1000;
console.log(`Se o participante NÃO trocar de porta: ${simulateMontyHall(numTrials, false)}% de vitórias`);
console.log(`Se o participante trocar de porta: ${simulateMontyHall(numTrials, true)}% de vitórias`);
