
// shim layer with setTimeout fallback
reqFrame =window.requestAnimationFrame ||
		  window.webkitRequestAnimationFrame ||
		  window.mozRequestAnimationFrame ||
		  window.oRequestAnimationFrame ||
		  window.msRequestAnimationFrame ||
		  function(/* function FrameRequestCallback */ callback, /* DOMElement Element */ element){
			window.setTimeout(callback, 1000 / 60);
			};



// Overall Physics Class
Physics = function(gameAgents, agentList, agent) // constructor
{
	this.physicalAgentList = [];
	this.actionsList = [];
	this.icanseeList = [];
	
	this.speed = 4;
	this.degtorad = Math.PI/180;
	this.simulationEnd = 10000;
	this.time = 0;
	this.ZombificationRange = 10;
	this.circ = 2*Math.PI;
	

	this.theCanvas = document.getElementById("mycanvas");
	this.theContext = this.theCanvas.getContext("2d");	
	
	// Zombies are green, humans are blue
	this.typeColour = ["#00FFFF","#00FF00"];
	
	this.mentalAgents = gameAgents;
	
	// probably want to communicate id list as well!

	for (var i = 0; i<agentList.length; i++)
	{
		var x = Math.random()*this.theCanvas.width;
		var y = Math.random()*this.theCanvas.height;
		var type = agentList[i].type;
		var id = agentList[i].id;
		this.physicalAgentList.push(new physicalAgent(x, y, type, id));
		// note the order in which they are pushed onto the list
	
	}
	
};

physicalAgent = function(x, y, type, id)
{

	this.x = x;
	this.y = y;
	
	// Humans are type 0, Zombies are type 1
	this.type = type;
	this.id = id;
	
};

// percept objects
percept = function(dx, dy, type)
{

	this.dx = dx;
	this.dy = dy;
	this.type;

};


	
	
	Physics.prototype.updatePercepts = function()
	{
	
		var perceptsList = [];
	
	
		return perceptsList;
	
	}
	

	
	Physics.prototype.processActions = function()
	{
		for (var agent = 0; agent<this.physicalAgentList.length; agent++)
		{
			//NOTE - actions to definitely exist for all agents!
		
			this.physicalAgentList[agent].x += this.speed*Math.cos(this.actionsList[agent]*this.degtorad);
			this.physicalAgentList[agent].y += this.speed*Math.sin(this.actionsList[agent]*this.degtorad);
			
			
			
		}
		
		// if any zombie gets within X distance of human then Zombification occurs
		
		// ugly N^2 loop to see who is close to what
		
		// change type of physicalAgent (and maybe id)
		// change type of/kill immaterialAgent
		
		
		// Zombiefication events?
		
	
	};
	
	Physics.prototype.graphics = function()
	{
	
		// clear the screen (double buffering would be better!)
		this.theContext.clearRect(0, 0, this.theCanvas.width, this.theCanvas.height);
	
		for (var agent=0; agent <this.physicalAgentList.length; agent++)
		{
		
			// colour by type!
			this.theContext.fillStyle = this.typeColour[this.physicalAgentList[agent].type];
			this.theContext.beginPath();
			this.theContext.arc(this.physicalAgentList[agent].x,
								this.physicalAgentList[agent].y,
								this.ZombificationRange/2, // Zombification occurs when 'sprites' overlap
								0,
								this.circ,
								true);
			// display id?
			
			//this.theContext.fillText("Hello World",10,50);
								
			this.theContext.closePath();
			this.theContext.fill();
			
		}
		
	};
	
	
	
	
	
	Physics.prototype.RunUniverse = function()
	{

		this.time ++;


		var perceptsList = Physics.prototype.updatePercepts();
		
		for (var agent = 0; agent<this.physicalAgentList.length; agent++)
		{
			
			this.actionsList[agent] = this.mentalAgents.agentUpdate( this.physicalAgentList[agent].id, perceptsList[agent] ); // hand it an empty list for the moment
		}
		this.processActions();	

		// ACTION type - angle of movement (assumes you always want to move in some direction!

		// INPUT - agentsYouCanSeeList = []

		// Zombification

		this.graphics();// could happily be a call to an external graphics method
		
		if (this.time < this.simulationEnd)
		{
		    var self=this;
			reqFrame(function(event) { self.RunUniverse(event); } );
		}



	};

	
