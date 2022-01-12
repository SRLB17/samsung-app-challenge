//import Task from "./tasks.mjs";
//import TaskManager from "./taskmanager.mjs";

/*export*/ const Timer = {
	time: 1500,
	intervalID: null,

	setupTimer() {
		intervalID = setInterval(this.timerLoop, 1000);
	},

	stopTimer() {
		console.log("All done!");
		this.intervalID ? clearInterval(this.intervalID) : null;
	},

	timerLoop() {
		if(TaskManager.taskStack.length <= 0) {
			this.stopTimer();
		} else {
			if(time <= 0) {
				this.runBreak();
				this.time = 1500;
				return;
			} else {
				TaskManager.updateTasks();
				this.time--;
			}
		}
	},

	runBreak() {
		//setTimeout or something that takes 5 min + other funcs
		console.log("Break done!");
	}
}
	

