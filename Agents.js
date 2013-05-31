// Overall Agents Class
Agents = function(agentTypeList)// constructor
{

	// instantiate agents

};

mentalAgent = function(type, id) {

	this.type = type;
	this.id = id;

};

Agents.prototype.agentUpdate = function(input) {
	// do nothing with input

	// return random angle in degrees
	return Math.random() * 360;

};

