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
    const { destination, source, draggableId } = result;

    if (!destination) return;

    const newStatus = destination.droppableId;

    await updateInquiryStatus(draggableId, newStatus);
  };

  const Column = ({ title, items, id, color }: any) => (
    <Droppable droppableId={id}>
      {(provided) => (
        <div className="space-y-4">
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition p-5"
        >
          <h2 className="text-sm font-semibold text-gray-700 mb-3">
            {title} ({items.length})
          </h2>

          <div className="px-4 py-2 rounded-xl bg-gray-900 text-white hover:bg-black transition text-sm">
            {items.map((inq: any, index: number) => (
              <Draggable
                key={inq.id}
                draggableId={inq.id}
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="bg-white border border-gray-100 rounded-2xl p-4 hover:shadow-md transition"
                  >
                    <p className="font-semibold">{inq.name}</p>
                    <p className="text-xs text-gray-500">{inq.email}</p>

                    <p className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition p-5">
                      {inq.message.slice(0, 60)}...
                    </p>
                  </div>
                )}
              </Draggable>
            ))}

            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="px-4 py-2 rounded-xl bg-gray-900 text-white hover:bg-black transition text-sm">

        <Column
          id="new"
          title="New"
          items={columns.new}
          color="text-blue-600"
        />

        <Column
          id="contacted"
          title="Contacted"
          items={columns.contacted}
          color="text-yellow-600"
        />

        <Column
          id="closed"
          title="Closed"
          items={columns.closed}
          color="text-gray-600"
        />

        <Column
          id="sold"
          title="Sold"
          items={columns.sold}
          color="text-green-600"
        />

      </div>
    </DragDropContext>
  );
}