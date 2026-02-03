import VoteButtons from "./VoteButtons";

export default function ResponseCard({ model, data }: any) {
  return (
    <div className="flex flex-col bg-white rounded-xl shadow-md border border-gray-200 h-[520px]">
      {/* Header */}
      <div className="px-4 py-3 border-b bg-gray-50 rounded-t-xl">
        <h2 className="text-lg font-semibold text-center">{model}</h2>
      </div>

      {/* Response */}
      <div className="flex-1 p-4 overflow-y-auto text-sm leading-relaxed whitespace-pre-wrap">
        {data.response}
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t bg-gray-50">
        <div className="flex justify-between text-xs text-gray-600 mb-2">
          <span>⏱ {data.time}s</span>
          <span>🔢 {data.tokens} tokens</span>
        </div>

        <VoteButtons model={model} />
      </div>
    </div>
  );
}
