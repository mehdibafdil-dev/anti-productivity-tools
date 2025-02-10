export interface TaskContext {
    id: string;
    lastAction: string;
    plannedAction: string;
    complexity: number;
    energyRequired: number;
    tags: string[];
  }
  
  export class WorkContext {
    private static instance: WorkContext;
    private currentTask: TaskContext | null = null;
    private thoughtProcess: Array<{
      timestamp: Date;
      thought: string;
      nextAction: string;
    }> = [];
    private energyLevel: number = 100;
  
    private constructor() {}
  
    static getInstance(): WorkContext {
      if (!WorkContext.instance) {
        WorkContext.instance = new WorkContext();
      }
      return WorkContext.instance;
    }
  
    saveContext(task: TaskContext): void {
      this.currentTask = task;
      this.thoughtProcess.push({
        timestamp: new Date(),
        thought: task.lastAction,
        nextAction: task.plannedAction
      });
    }
  
    startFocusSession(duration: number): void {
      const timer = new FocusTimer(duration);
      timer.onComplete(() => this.handleSessionComplete());
    }
  
    private handleSessionComplete(): void {
      this.energyLevel -= 20;
      if (this.energyLevel < 30) {
        this.suggestBreak();
      }
    }
  
    private suggestBreak(): void {
      console.log("Energy levels low! Time for a break!");
      // Trigger notification system
    }
  }