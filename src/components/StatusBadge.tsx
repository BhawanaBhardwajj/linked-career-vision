import { cn } from "@/lib/utils";

type Status = "applied" | "interview" | "offer" | "rejected" | "pending";

interface StatusBadgeProps {
  status: Status;
}

const statusConfig = {
  applied: {
    label: "Applied",
    className: "bg-blue-50 text-blue-700 border-blue-200",
  },
  interview: {
    label: "Interview Scheduled",
    className: "bg-amber-50 text-amber-700 border-amber-200",
  },
  offer: {
    label: "Offer",
    className: "bg-green-50 text-green-700 border-green-200",
  },
  rejected: {
    label: "Not Selected",
    className: "bg-red-50 text-red-700 border-red-200",
  },
  pending: {
    label: "Pending",
    className: "bg-gray-50 text-gray-700 border-gray-200",
  },
};

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const config = statusConfig[status];

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
        config.className
      )}
    >
      {config.label}
    </span>
  );
};

export default StatusBadge;
