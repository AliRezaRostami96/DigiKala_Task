import React from 'react';

const ProductLoadingComponent: React.FC = () => {

    return (
        <div className="py-2 flex-1">
            <div className="w-full max-w-xs bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
                <div className="animate-pulse">
                    <div className="rounded-sm bg-slate-200 h-28 w-36 mx-auto mb-4"></div>
                    <div className="space-y-6 py-1">
                        <div className="h-2 bg-slate-200 rounded"></div>
                        <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                            </div>
                            <div className="h-2 bg-slate-200 rounded"></div>
                        </div>
                    </div>
                    <button className="my-4 mx-0 w-full bg-slate-200 py-4 rounded-xl shadow-lg"></button>
                </div>
            </div>
        </div>
    )

}

export default ProductLoadingComponent;