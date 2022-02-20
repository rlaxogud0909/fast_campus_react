import React from "react";

export default function Message() {
    return (
        <>
            {/* 다크 모드 */}
            <div className="dark">
                <div className="py-8 px-8 max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                    <img
                        className="block mx-auto h-16 md:h-32 lg:h-48 rounded-full sm:mx-0 sm:flex-shrink-0"
                        src="https://v2.tailwindcss.com/img/erin-lindford.jpg"
                        alt="Woman's Face"
                    />
                    <div className="text-center space-y-2 sm:text-left">
                        <div className="space-y-0.5">
                            <p className="text-lg text-black font-semibold">
                                Erin Lindford
                            </p>
                            <p className="text-gray-500 font-medium">
                                Product Engineer
                            </p>
                        </div>
                        <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                            Message
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div className="py-8 px-8 max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                    <img
                        className="block mx-auto h-16 md:h-32 lg:h-48 rounded-full sm:mx-0 sm:flex-shrink-0"
                        src="https://v2.tailwindcss.com/img/erin-lindford.jpg"
                        alt="Woman's Face"
                    />
                    <div className="text-center space-y-2 sm:text-left">
                        <div className="space-y-0.5">
                            <p className="text-lg text-black font-semibold">
                                Erin Lindford
                            </p>
                            <p className="text-gray-500 font-medium">
                                Product Engineer
                            </p>
                        </div>
                        <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                            Message
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
