import { FaXmark } from "react-icons/fa6";
import type { Icards } from "../../types/cardsTypes";

interface YourStackProps {
      stack: Icards[];
      onRemove: (id: string) => void;
      onRemoveAll: () => void;
}

const YourStack = ({
      stack,
      onRemove,
      onRemoveAll,
}: YourStackProps) => {
      return (
            <aside className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm lg:sticky lg:top-5">

                  {/* Header */}
                  <div className="mb-4">
                        <h2 className="text-sm font-bold text-gray-900"> Your Stack</h2>

                        <p className="mt-1 text-[10px] text-gray-400"> {stack.length} Technology Selected</p>
                  </div>

                  {/* Empty State */}
                  {stack.length === 0 ? (
                        <div className="rounded-lg border border-dashed border-gray-200 p-5 text-center"> <p className="text-xs text-gray-400">  No technology selected yet.</p>

                              <p className="mt-1 text-[10px] text-gray-300"> Add technologies to build your stack.</p>
                        </div>
                  ) : (
                        /* Stack Items */
                        <div className="space-y-2"> {stack.map((item) => (
                              <div key={item.id} className="flex items-center justify-between rounded-lg border border-gray-200 p-3 transition hover:border-gray-300"  >



                                    {/* Technology Info */}
                                    <div className="flex min-w-0 items-center gap-3">
                                          <img src={item.icon} alt={item.name} className="h-7 w-7 object-contain" />

                                          <div className="min-w-0">
                                                <h3 className="truncate text-xs font-semibold text-gray-800"> {item.name} </h3>

                                                <p className="text-[9px] text-gray-400"> {item.category}</p>
                                          </div>
                                    </div>

                                    {/* Remove Button */}
                                    <button
                                          onClick={() => onRemove(item.id)} className="ml-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-lg text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                                          title={`Remove ${item.name}`} >

                                          <FaXmark />
                                    </button>
                              </div>
                        ))}
                        </div>
                  )}

                  {/* Remove All */}
                  {stack.length > 0 && (
                        <button
                              onClick={onRemoveAll} className="mt-6 w-full rounded-md border border-red-200 py-2.5 text-xs font-medium text-red-500 transition hover:bg-red-50" > Remove All</button>
                  )}
            </aside>
      );
};

export default YourStack;