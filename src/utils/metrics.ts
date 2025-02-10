import { ProductivityMetric } from '../types';

export class MetricsCalculator {
  static calculateProductivityScore(metrics: ProductivityMetric[]): number {
    if (!metrics.length) return 0;

    return metrics.reduce((acc, metric) => {
      const baseScore = metric.focusScore * metric.tasksCompleted;
      const energyEfficiency = baseScore / metric.energyLevel;
      return acc + energyEfficiency;
    }, 0) / metrics.length;
  }

  static getPerformanceTrend(metrics: ProductivityMetric[]): {
    trend: 'up' | 'down' | 'stable';
    percentage: number;
  } {
    if (metrics.length < 2) return { trend: 'stable', percentage: 0 };

    const recentMetrics = metrics.slice(-5);
    const oldAvg = this.calculateProductivityScore(recentMetrics.slice(0, 2));
    const newAvg = this.calculateProductivityScore(recentMetrics.slice(-2));
    
    const percentageChange = ((newAvg - oldAvg) / oldAvg) * 100;
    
    return {
      trend: percentageChange > 5 ? 'up' : percentageChange < -5 ? 'down' : 'stable',
      percentage: Math.abs(percentageChange),
    };
  }
}