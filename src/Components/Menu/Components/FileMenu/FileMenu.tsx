import React, { useEffect, useRef, useState } from 'react';
import {FaCaretRight} from 'react-icons/fa'

function FileMenu() {
    const [openFileMenu, setOpenFileMenu] = useState(false)
    const [openRecent, setOpenRecent] = useState(false)
    const [openTemplates, setOpenTemplates] = useState(false)



    const fileSubmenuRef = useRef<HTMLDivElement>(null);

    // handle click outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (fileSubmenuRef.current && !fileSubmenuRef.current.contains(event.target as Node)) {
                setOpenFileMenu(false);
            }
        }

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [fileSubmenuRef]);



    const toggleMenu = (menu_name: string) => {
        if (menu_name === "FileMenu"){
            setOpenFileMenu(!openFileMenu)
        }
        else if (menu_name === "openRecent"){
            setOpenRecent(!openRecent)
        }
        else{
            setOpenTemplates(!openTemplates)
        }
    }


    // tailwind class for menu items
    const menu_item_class = "p-1 cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-600"

    return (
        <section ref={fileSubmenuRef} className='dark:text-white'>
            <button className='hover:text-blue-500' onClick={()=> toggleMenu("FileMenu")}>File</button>
            <section className={`${openFileMenu ? "flex": "hidden"} px-2  bg-zinc-100 dark:bg-zinc-700 flex-col absolute top-[20px] rounded left-1 shadow-sm`}>
                <p className={menu_item_class}>New Project</p>
                <p className={menu_item_class}>Open Project</p>

                <div>
                    <span onClick={()=> toggleMenu("openRecent")} className='flex justify-between'>
                        <p>Recent</p>
                        <FaCaretRight/>
                    </span>
                    <span className={`${openRecent ? "block" : "hidden"} absolute left-[14.5rem] rounded top-16 bg-zinc-300 w-auto p-1`}>
                        <p className='p-2'>UselEss</p>
                        <p className='p-2'>UseLess</p>
                        <p className='p-2'>UseLesS</p>
                    </span>
                </div>
                <div>Templates</div>
                <p className={menu_item_class}>Make current Project a Template</p>

                <p className={menu_item_class}>Save</p>
                <div className={menu_item_class + " flex justify-between"}>
                    <p>Auto Save</p>
                    <input type='checkbox' value={"true"} />
                </div>
                <p className={menu_item_class}>Close Project</p>
                <p className={menu_item_class}>Close All Projects</p>
                
                <p className={menu_item_class}>Delete Project</p>

                <p className={menu_item_class}>Export</p>
                <p className={menu_item_class}>Import</p>
                <p className={menu_item_class}>Exit</p>
            </section>
        </section>
    );
}

export default FileMenu;