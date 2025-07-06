import * as React from "react";
import classNames from "classnames";
import * as Accordion from "@radix-ui/react-accordion";
import {
    ChevronDownIcon
} from "@radix-ui/react-icons";
import type {
    AccordionItemProps,
    AccordionTriggerProps,
    AccordionContentProps
} from "@radix-ui/react-accordion";

import { achievements } from '../app/config';
import { GiAchievement } from 'react-icons/gi';


const achievementsByYear = Object.groupBy(
    achievements,
    (achievement) => achievement.year
);

const colorMap: Record<number, string> = {
    1: 'text-[#FFD700]', // Gold color
    2: 'text-[#C0C0C0]', // Silver color
    3: 'text-[#CD7F32]', // Bronze color
};

const AccordionDemo = () => (
    <Accordion.Root
        className="w-[85vw] rounded-md "
        type="single"
        defaultValue="item-1"
        collapsible
    >
        {Object.entries(achievementsByYear).sort(([a], [b]) => Number(b) - Number(a)).map(([year, yearAchievements]) => (
            <AccordionItem key={year} className="outline-none" value={`item-${year}`}>
                <AccordionTrigger className="text-[50px] m-[16px] flex justify-center gap-4 shadow-none">{year}</AccordionTrigger>
                <AccordionContent style={{
                    animation: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)'
                }}>
                    <div className="flex flex-wrap gap-8 justify-center">
                        {yearAchievements!.map((achievement) => (
                            <div
                                key={achievement.title}
                                className=' w-[380px] rounded-lg border border-white/20 bg-white/10 p-6 text-center shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-white/15 hover:shadow-lg'
                            >
                                <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20'>
                                    <GiAchievement
                                        className={`h-10 w-10 ${achievement.position &&
                                            colorMap[achievement.position]
                                            ? colorMap[achievement.position]
                                            : 'text-[#4aacfc]'
                                            } transition-all duration-1000 hover:brightness-125`}
                                    />
                                </div>
                                <h3 className='mb-2 text-xl font-semibold text-white'>
                                    {achievement.title}
                                </h3>
                                <p className='mb-2 text-yellow-400'>
                                    {achievement.level}
                                </p>
                                <p className='text-sm text-gray-300'>
                                    {achievement.description}
                                </p>
                                {achievement.category && (
                                    <span className='mt-3 inline-block rounded-full bg-blue-600/20 px-3 py-1 text-sm text-blue-300'>
                                        {achievement.category}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </AccordionContent>
            </AccordionItem>
        ))}
    </Accordion.Root>
);


const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
    ({ children, className, ...props }, forwardedRef) => (
        <Accordion.Item
            className={classNames(
                "mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px] focus-within:shadow-mauve12",
                className
            )}
            {...props}
            ref={forwardedRef}
        >
            {children}
        </Accordion.Item>
    )
);
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
    ({ children, className, ...props }, forwardedRef) => (
        <Accordion.Header className="flex">
            <Accordion.Trigger
                className={classNames(
                    "group flex h-[45px] flex-1 cursor-default items-center justify-between bg-mauve1 px-5 text-[15px] leading-none text-violet11 shadow-[0_1px_0] shadow-mauve6 outline-none hover:bg-mauve2",
                    className
                )}
                {...props}
                ref={forwardedRef}
            >
                {children}
                <ChevronDownIcon
                    className="text-violet10 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
                    aria-hidden
                />
            </Accordion.Trigger>
        </Accordion.Header>
    )
);
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
    ({ children, className, ...props }, forwardedRef) => (
        <Accordion.Content
            className={classNames(
                "overflow-hidden bg-mauve2 text-[15px] text-mauve11 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown",
                className
            )}
            {...props}
            ref={forwardedRef}
        >
            <div className="px-5 py-[15px]">{children}</div>
        </Accordion.Content>
    )
);
AccordionContent.displayName = "AccordionContent";

export default AccordionDemo;
