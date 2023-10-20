import React, { ReactNode } from 'react';
import { useSpring, animated } from 'react-spring';

interface TaskListContainerProps {
  show: boolean;
  children: ReactNode;
}

const TaskListContainer: React.FC<TaskListContainerProps> = ({ show, children }) => {
  const animationProps = useSpring({
    opacity: show ? 1 : 0,
    transform: `translateY(${show ? '0%' : '20%'})`,
    config: {
      tension: 280,
      friction: 22,
    },
  });

  return (
    <animated.div
      style={{
        opacity: animationProps.opacity,
        transform: animationProps.transform,
      }}
      className="mt-5 bg-gray-400 bg-opacity-50 px-5 py-7 rounded-3xl"
    >
      {children}
    </animated.div>
  );
};

export default TaskListContainer;
