export interface SessionConfig {
    duration: number;
    complexity: 'low' | 'medium' | 'high';
    type: 'development' | 'review' | 'planning' | 'debugging';
  }
  
  export interface TaskContext {
    taskId: string;
    lastAction: string;
    plannedAction: string;
    complexity: number;
    energyRequired: number;
    tags?: string[];
    dependencies?: string[];
  }
  
  export interface ProductivityMetric {
    timestamp?: Date;
    focusScore: number;
    tasksCompleted: number;
    energyLevel: number;
    interruptions?: number;
    sessionDuration?: number;
  }
  
  export interface Report {
    dailyMetrics: ProductivityMetric[];
    weeklyTrends: {
      averageFocusScore: number;
      totalTasksCompleted: number;
      peakPerformanceTime: string;
    };
    recommendations: string[];
  }
  
  export interface Analytics {
    currentStreak: number;
    productivityScore: number;
    focusDistribution: Record<string, number>;
    improvements: {
      category: string;
      percentage: number;
    }[];
  }