import type { Icards } from "../../types/cardsTypes";

interface TechnologyCardProps {
          card: Icards;
          isAdded: boolean;
          onAdd: (card: Icards) => void;
}

const TechnologyCard = ({
          card,
          isAdded,
          onAdd,
}: TechnologyCardProps) => {
          return (
                    <div className="rounded-xl border   bg-white p-4 shadow-sm transition  hover:border-pink-400 hover:shadow-md">

                              <div className="flex items-start justify-between">
                                        <img
                                                  src={card.icon}
                                                  alt={card.name}
                                                  className="h-8 w-8 object-contain"
                                        />

                                        <span className="rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-500">
                                                  {card.badge}
                                        </span>
                              </div>

                              <h3 className="mt-3 font-bold text-gray-900">
                                        {card.name}
                              </h3>

                              <p className="mt-2 text-xs leading-5 text-gray-500">
                                        {card.description}
                              </p>

                              <div className="my-4 flex items-center justify-between text-[10px]">
                                        <span className="rounded bg-gray-100 px-2 py-1">
                                                  {card.category}
                                        </span>

                                        <span>{card.difficulty}</span>

                                        <span>⭐ {card.rating}</span>
                              </div>

                              <button
                                        onClick={() => onAdd(card)}
                                        className={`w-full rounded-md py-2 text-xs ${isAdded
                                                            ? "bg-green-100 text-green-600"
                                                            : "bg-gray-900 text-white hover:bg-gray-700"
                                                  }`}
                              >
                                        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                              </button>
                    </div>
          );
};

export default TechnologyCard;