# Monty Hall 

The Monty Hall problem algorithm simulates a probability puzzle based on a game show scenario. Here's a brief description:

1. **Initialization**: The algorithm starts by setting up three doors, with one door randomly assigned a prize (e.g., a car) and the other two doors assigned goats.
2. **Participant's Choice**: The participant selects one of the three doors. This choice is recorded but the door remains unopened.
3. **Host's Action**: The host, who knows what's behind each door, opens one of the two doors not chosen by the participant, always revealing a goat. This step ensures that at least one of the remaining unopened doors hides the prize.
4. **Decision Point**: The participant is then given the option to stick with their original choice or switch to the other unopened door.
5. **Outcome Determination**: The algorithm reveals whether the participant's final choice (whether they switched or stayed) wins the prize.

The key insight of the Monty Hall problem is that switching doors statistically increases the participant's chances of winning the prize from 1/3 to 2/3, a counterintuitive result that the algorithm can demonstrate through repeated simulation.

## Running the Monty Hall Problem Algorithm with Bun

To run the Monty Hall problem algorithm from the GitHub project using Bun, follow these instructions.

### Prerequisites

- Ensure Bun is installed on your system. If not, you can install it by following the instructions on the [Bun website](https://bun.sh/) or its [GitHub repository](https://github.com/oven-sh/bun).

### Cloning and Running the Project

1. **Open a Terminal**: Launch your terminal or command prompt.

2. **Clone the GitHub Repository**: Clone the Monty Hall project repository by executing the following command:
   ```bash
   git clone https://github.com/volnei/monty_hall

3. Navigate to the Project Directory: Change into the project directory that was cloned:
   ```bash
   cd monty_hall

4. Run the Script with Bun: Execute the index.js script by typing the following command and pressing Enter:
   ```bash
   bun run index.js

5. See the results in console 


# Motivation

To understand more about the Monty Hall problem, read this article in portuguese: [Além da Intuição: O Surpreendente Problema de Monty Hall](https://volneigm.medium.com/al%C3%A9m-da-intui%C3%A7%C3%A3o-o-surpreendente-problema-de-monty-hall-9665f1f3e144)