import { useState } from "react";

import { CloseButton } from "../CloseButton";

import bugImageURL from "../../assets/bug.svg";
import ideaImageURL from "../../assets/idea.svg";
import thoughtImageURL from "../../assets/thought.svg";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
    BUG: {
        title: "Problema",
        image:{
            source: bugImageURL,
            alt:'Imagem de um insecto'
        }
    },
    IDEA: {
        title: "Ideia",
        image:{
            source: ideaImageURL,
            alt:'Imagem de uma lâmpada'
        }
    },
    OTHER: {
        title: "Outro",
        image:{
            source: thoughtImageURL,
            alt:'Imagem de uma nuvem de pensamento'
        }
    },
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm(){
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

    function handleRestartFeedback(){
        setFeedbackType(null)
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">            

            {!feedbackType ? (

                <FeedbackTypeStep onFeedbackTypeChanged = {setFeedbackType} />

            ) : (
                <FeedbackContentStep 
                    feedbackType ={feedbackType} 
                    onFeedbackRestartRequested={handleRestartFeedback}
                />
            )}

            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-2" href="http://">Rocketseat</a> 
            </footer>
        </div>
    )
}