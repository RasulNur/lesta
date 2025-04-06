"use client";

export default function Error({ reset }: { reset: () => void }) {
    return (
        <div className="container py-20 flex-center">
            <div className="flex-center flex-col gap-10">
                <h4 className="lg:text-xl text-lg leading-120 text-center">Что-то пошло не так</h4>
                <button className="main-btn" onClick={() => reset()}>
                    Попробовать снова
                </button>
            </div>
        </div>
    );
}
