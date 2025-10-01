import { cn } from "@/lib/utils";

type Status = "applied" | "interview" | "offer" | "rejected" | "pending";

interface StatusBadgeProps {
  status: Status;
}

const statusConfig = {
  applied: {
    label: "Applied",
    className: "bg-primary/10 text-primary border-primary/20",
  },
  interview: {
    label: "Interview Scheduled",
    className: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950 dark:text-amber-400 dark:border-amber-800",
  },
  offer: {
    label: "Offer",
    className: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-400 dark:border-emerald-800",
  },
  rejected: {
    label: "Not Selected",
    className: "bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-400 dark:border-red-800",
  },
  pending: {
    label: "Pending",
    className: "bg-muted text-muted-foreground border-border",
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
