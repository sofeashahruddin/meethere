import { Bars3Icon } from '@heroicons/react/24/solid';
import { Outlet } from 'react-router-dom';

export default function Nav() {
    return (
        <>
            <div id="sidebar" className="flex justify-end items-start p-8">
                <div className="">
                    <Bars3Icon className="size-6 text-black-500" />
                    <nav className="underline">
                        <ul>
                            <li>
                                <a href={`/contacts/1`} className="block p-8">Your Name</a>
                            </li>
                            <li>
                                <a href={`/contacts/2`} className="block p-8">Your Friend</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>            

            <main className="container mx-auto p-8"> <Outlet /> </main>
        </>
    );
}
//need to change the div sidebar thingy
