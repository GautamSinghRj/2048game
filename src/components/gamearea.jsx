
export default function GameArea() {
    return (
        <div className="w-96 h-96 grid grid-cols-4 gap-2 mt-12">
            <div className="grid grid-rows-4 gap-2">
                <div id="00" className="bg-[#bdac97] rounded-3xl shadow-xl"></div>
                <div id="01" className="bg-[#bdac97] rounded-3xl shadow-xl"></div>
                <div id="02" className="bg-[#bdac97] rounded-3xl shadow-xl"></div>
                <div id="03" className="bg-[#bdac97] rounded-3xl shadow-xl"></div>
            </div>
            <div className="grid grid-rows-4 gap-2 ">
                <div id="10" className="bg-[#bdac97] rounded-3xl shadow-xl"></div>
                <div id="11" className="bg-[#bdac97] rounded-3xl shadow-xl"></div>
                <div id="12"className="bg-[#bdac97] rounded-3xl shadow-xl"></div>
                <div id="13" className="bg-[#bdac97] rounded-3xl shadow-xl"></div>
            </div>
            <div className="grid grid-rows-4 gap-2 ">
                <div id="20" className="bg-[#bdac97] rounded-3xl shadow-xl"></div>
                <div id="21"className="bg-[#bdac97] rounded-3xl shadow-xl"></div>
                <div id="22"className="bg-[#bdac97] rounded-3xl shadow-xl"></div>
                <div id="23" className="bg-[#bdac97] rounded-3xl shadow-xl"></div>
            </div>
            <div className="grid grid-rows-4 gap-2 ">
                <div id="30" className="bg-[#bdac97] rounded-3xl shadow-xl"></div>
                <div id="31"className="bg-[#bdac97] rounded-3xl shadow-xl"></div>
                <div id="32" className="bg-[#bdac97] rounded-3xl shadow-xl"></div>
                <div id="33"className="bg-[#bdac97] rounded-3xl shadow-xl"></div>
            </div>
        </div>
    );
}