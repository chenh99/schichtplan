"use client";

import { useState } from "react";

const DAYS = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];
const SHORT_DAYS = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
const START_TIMES = ["8:00", "10:30", "11:30", "12:00", "17:00", "18:00", "18:30"];

type Person = { id: string; name: string };

type Props = {
  people: Person[];
};

export default function WeekGrid({ people }: Props) {
  const [plan, setPlan] = useState<Record<string, string>>({});

  function setShift(personId: string, day: number, shift: string) {
    const key = `${personId}-${day}`;
    setPlan((current) => {
      const next = { ...current };
      if (shift === "") {
        delete next[key];
      } else {
        next[key] = shift;
      }
      return next;
    });
  }

  const dailyCounts = DAYS.map(
    (_, index) => people.filter((person) => (plan[`${person.id}-${index}`] ?? "") !== "").length,
  );

  return (
    <div className="relative overflow-x-auto rounded-xl border border-border bg-card">
      <table className="w-full min-w-[52rem] border-collapse text-sm">
        <caption className="sr-only">Wochenplan mit Schichten pro Person und Tag</caption>
        <thead>
          <tr>
            <th
              scope="col"
              className="sticky left-0 z-10 border-b border-r border-border bg-card px-3 py-3 text-left font-semibold"
            >
              Team
            </th>
            {DAYS.map((day, index) => (
              <th key={day} scope="col" className="border-b border-border px-1 py-3 font-semibold">
                <span className="sm:hidden" aria-hidden="true">
                  {SHORT_DAYS[index]}
                </span>
                <span className="sr-only sm:not-sr-only">{day}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <tr key={person.id}>
              <th
                scope="row"
                className="sticky left-0 z-10 border-b border-r border-border bg-card px-3 py-1 text-left font-medium"
              >
                {person.name}
              </th>
              {DAYS.map((day, index) => {
                const value = plan[`${person.id}-${index}`] ?? "";
                return (
                  <td key={day} className="border-b border-border p-1">
                    <select
                      value={value}
                      onChange={(event) => setShift(person.id, index, event.target.value)}
                      aria-label={`${person.name}, ${day}`}
                      className={`min-h-11 w-full rounded-lg border border-border px-1 text-sm ${
                        value ? "bg-accent-soft font-medium text-foreground" : "bg-card text-muted"
                      }`}
                    >
                      {START_TIMES.map((time) => (
                        <option key={time} value={time}>
                          {time} Uhr
                        </option>
                      ))}
                      <option value="">frei</option>
                    </select>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th
              scope="row"
              className="sticky left-0 z-10 border-r border-border bg-card px-3 py-3 text-left font-semibold"
            >
              Eingeteilt
            </th>
            {DAYS.map((day, index) => (
              <td key={day} className="px-1 py-3 text-center font-semibold">
                <span aria-label={`${day}: ${dailyCounts[index]} eingeteilt`}>{dailyCounts[index]}</span>
              </td>
            ))}
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
