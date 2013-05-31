// Overall Physics Class
Zombiez = function()// constructor
{

	agentDetails = function(type, id)
	{
	
		// Humans are type 0, Zombies are type 1
		this.type = type;
		this.id = id;
		
	};	

	agentList = [];
	numAgents = 10;
	for (var i = 1; i<=numAgents; i++)
	{
		// this isn't necessarily how you'd actually set type and id
		type = Math.floor(Math.random()*2);
		id = i;
		
		
		// attributes = {};
		// attributes.type = 17;
		// attributes.id = 4;
		// attributes.size = 17;
			
		agentList.push(new agentDetails(type, id));
	
	}
	

	// call to my agent stub
	gameAgents = new Agents(agentList);

	
	// create physics engine, receive link, pass link, pass details for agents to be created
	gamePhysics = new Physics(gameAgents, agentList);

	// start simulation 
	gamePhysics.RunUniverse();

};

// otherwise program will start before DOM elements initiated!
window.onload = function() {
	//run your script in here

	zom = new Zombiez();

};

