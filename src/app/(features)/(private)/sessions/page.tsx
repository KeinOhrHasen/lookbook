'use client';

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hook';
import { selectSessions } from '@/lib/redux/features/sessions/selectors';
import { useEffect } from 'react';
import { sessionsList, sessionUpdateStatus } from '@/lib/redux/features/sessions/slice';
import { Button } from '@/components/ui/button';
import { ISession } from '@/src/core/interfaces/sessions.model';

export default function Sessions() {
  const sessions = useAppSelector(selectSessions);
  const dispatch = useAppDispatch();
  const statusesMap = new Map([
    ['requested', 'planned'],
    ['planned', 'done'],
    ['done', 'requested'],
  ]);

  useEffect(() => {
    dispatch(sessionsList());
  }, []);

  const getStatus = (session: ISession): string => {
    return statusesMap.get(session?.status || 'requested') || 'planned';
  };

  const changeStatus = (session: ISession): void => {
    dispatch(
      sessionUpdateStatus({ status: statusesMap.get(session?.status || 'requested') || 'planned', id: session._id }),
    );
  };

  return (
    <div className="px-24 py-12 bg-slate-300 h-full">
      <Table>
        <TableCaption>A list of your sessions</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Customer</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Product Type</TableHead>
            <TableHead>Details</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sessions.map((session) => (
            <TableRow key={session._id}>
              <TableCell className="font-medium">{session.name}</TableCell>
              <TableCell>{session.date}</TableCell>
              <TableCell>{session.productType}</TableCell>
              <TableCell>{session.details}</TableCell>
              <TableCell>{session.phone}</TableCell>
              <TableCell>{session.email}</TableCell>
              <TableCell>{session.status}</TableCell>
              <TableCell>
                <Button type="submit" onClick={() => changeStatus(session)}>
                  Mark as {getStatus(session)}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
