"use client";

import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { updateInquiryStatus } from "@/lib/inquiries";

export default function CRMBoard({ inquiries }: any) {
  const columns = {
    new: inquiries.filter((i: any) => i.status === "new"),
    contacted: inquiries.filter((i: any) => i.status === "contacted"),
    closed: inquiries.filter((i: any) => i.status === "closed"),
    sold: inquiries.filter((i: any) => i.status === "sold"),
  };

  const onDragEnd = async (result: any) => {
    const { destination, draggableId } = result;
    if (!destination) return;
    await updateInquiryStatus(draggableId, destination.droppableId);
  };

  const Column = ({ title, items, id }: any) => (
    <Droppable droppableId={id}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition p-5 space-y-4"
        >
          <h2 className="text-sm font-semibold text-gray-700 mb-3">
            {title} ({items.length})
          </h2>
          {items.map((inq: any, index: number) => (
            <Draggable key={inq.id} draggableId={inq.id} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className="bg-white border border-gray-100 rounded-2xl p-4 hover:shadow-md transition"
                >
                  <p className="font-semibold">{inq.name}</p>
                  <p className="text-xs text-gray-500">{inq.email}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    {inq.message.slice(0, 60)}...
                  </p>
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-4 gap-4 p-4">
        <Column id="new" title="New" items={columns.new} />
        <Column id="contacted" title="Contacted" items={columns.contacted} />
        <Column id="closed" title="Closed" items={columns.closed} />
        <Column id="sold" title="Sold" items={columns.sold} />
      </div>
    </DragDropContext>
  );
}
