import { use, useState } from "react";

import type { Icards } from "../../types/cardsTypes";

import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

import { toast } from "react-toastify";

interface CardsProps {
    cardsPromise: Promise<Icards[]>;
}

const Cards = ({ cardsPromise }: CardsProps) => {
    const cards = use(cardsPromise);

    const [stack, setStack] = useState<Icards[]>([]);

    // Add technology
    const handleAdd = (card: Icards) => {
        const alreadyAdded = stack.some(
            (item) => item.id === card.id
        );

        // Duplicate add
        if (alreadyAdded) {
            toast.warning(`${card.name} is already in your stack!`);
            return;
        }

        // Add to stack
        setStack((previousStack) => [
            ...previousStack,
            card,
        ]);

        toast.success(`${card.name} added to your stack!`);
    };

    // Remove one technology
    const handleRemove = (id: string) => {
        const removedItem = stack.find(
            (item) => item.id === id
        );

        setStack((previousStack) =>
            previousStack.filter((item) => item.id !== id)
        );

        if (removedItem) {
            toast.info(`${removedItem.name} removed from your stack!`);
        }
    };

    // Remove all technologies
    const handleRemoveAll = () => {
        setStack([]);

        toast.success("All technologies removed from your stack!");
    };

    return (
        <section className="container mx-auto px-4 py-10">

            {/* Section Heading */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                    Explore the{" "}
                    <span className="text-pink-500">
                        Technologies
                    </span>
                </h2>

                <p className="mt-1 text-xs text-gray-400">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>

            {/* Main Layout */}
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_280px]">

                {/* Technology Cards */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

                    {cards.map((card) => (
                        <TechnologyCard
                            key={card.id}
                            card={card}
                            isAdded={stack.some(
                                (item) => item.id === card.id
                            )}
                            onAdd={handleAdd}
                        />
                    ))}

                </div>

                {/* Sidebar */}
                <YourStack
                    stack={stack}
                    onRemove={handleRemove}
                    onRemoveAll={handleRemoveAll}
                />

            </div>
        </section>
    );
};

export default Cards;