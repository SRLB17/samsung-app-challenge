import Task from "./tasks.mjs";

export class TaskManager {
	constructor() {
		this.taskStack = [];
	}
	
	addTask(task) {
		if(!(task instanceof Task)) {
			throw new Error("task must be of type Task");
		} else {
			this.taskStack.push(task);
		}
	}

	removeTask(name=null) {
		if(name) {
			const index = this.taskStack.indexOf(name);
			if(index > -1) {
				throw new Error(`${name} not in taskStack`);
			} else {
				this.taskStack.splice(index, 1);
			}
		} else {
			this.taskStack.shift();
		}
	}
	
	updateTasks() {
		this.localStack[0].timeLeft -= 1;

		this.localStack[0].timeLeft <= 0 ? this.taskFinished : null;
	}

	taskFinished() {
		//run task finished funcs
		removeTask();
	}

}
