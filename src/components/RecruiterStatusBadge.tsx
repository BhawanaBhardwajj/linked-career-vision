import { cn } from "@/lib/utils";

type RecruiterStatus = "new" | "replied" | "pending";

interface RecruiterStatusBadgeProps {
  status: RecruiterStatus;
}

const statusConfig = {
  new: {
    label: "New",
    className: "bg-primary/10 text-primary border-primary/20",
  },
  replied: {
    label: "Replied",
    className: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-400 dark:border-emerald-800",
  },
  pending: {
    label: "Pending Follow-Up",
    className: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950 dark:text-amber-400 dark:border-amber-800",
  },
};

const RecruiterStatusBadge = ({ status }: RecruiterStatusBadgeProps) => {
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

export default RecruiterStatusBadge;
