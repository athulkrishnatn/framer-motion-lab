import { Geist } from "next/font/google"
import { Card } from "./ui/card"

export const Content = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-gray-50">
            <Card/>
        </div>
    )
}