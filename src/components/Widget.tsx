import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react';

export function Widget() {
    return (
        <Popover className="absolute bottom-7 right-7">
            <Popover.Panel>Hello World</Popover.Panel>

            <Popover.Button className="bg-violet-500 rounded-full px-5 h-16 text-white flex items-center group">
                <ChatTeardropDots className="w-6 h-6" />

                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                    <span className='pl-2'></span>
                    Feedback
                </span>
            </Popover.Button>
        </Popover>
    )
}