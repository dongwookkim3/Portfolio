import type { SkillCategory } from './types';

export const skills: SkillCategory[] = [
    {
        category: 'Robotics',
        items: ['ROS2', 'SLAM', 'Navigation', 'Gazebo'],
    },
    {
        category: 'Embedded',
        items: ['STM32', 'Arduino', 'Raspberry Pi', 'Jetson Nano', 'RDK X3'],
    },
    {
        category: 'Language',
        items: ['C', 'C++', 'Python', 'TypeScript'],
    },
    {
        category: 'Hardware',
        items: ['KiCAD', 'AutoCAD', 'Fusion360', 'CircuitMaker'],
    },
    {
        category: 'Tools',
        items: ['Git', 'Docker', 'Linux', 'MQTT'],
    },
];
