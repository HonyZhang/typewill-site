/**
 * 计算动画延迟时间
 * @param index 元素索引
 * @param baseDelay 基础延迟（毫秒）
 * @param step 每个元素增加的延迟（毫秒）
 * @returns 样式对象
 */
export function useAnimationDelay(index: number, baseDelay = 100, step = 100) {
  return {
    style: {
      animationDelay: `${baseDelay + index * step}ms`
    }
  }
} 