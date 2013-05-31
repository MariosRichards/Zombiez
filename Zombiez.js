// Overall Physics Class
Zombiez = function()// constructor
{

	agentTypeList = [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];

	gameAgents = new Agents(agentTypeList);

	gamePhysics = new Physics(gameAgents, agentTypeList);

	gamePhysics.RunUniverse();

};

// otherwise program will start before DOM elements initiated!
window.onload = function() {
	//run your script in here

	zom = new Zombiez();

};

