import { db, table } from '@/utils/Firebase';
import {
  collection,
  addDoc,
  getDocs,
  Timestamp,
  orderBy,
  query,
} from 'firebase/firestore';
import type { DocumentData } from 'firebase/firestore';
import { WeatherPayload } from '@/types/Weather';

export async function GET() {
  const weatherRef = collection(db, table);

  const result: DocumentData[] = [];

  const q = query(weatherRef, orderBy('timestamp', 'desc'));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    const data = { id: doc.id, ...doc.data() };

    result.push(data);
  });

  return Response.json({ data: result }, { status: 200 });
}

export async function POST(req: Request) {
  try {
    const payload: WeatherPayload = await req.json();

    const querySnapshot = await addDoc(collection(db, table), {
      ...payload,
      timestamp: Timestamp.now(),
    });

    return Response.json(
      {
        message: 'saved successful',
        data: querySnapshot.id,
      },
      { status: 200 },
    );
  } catch (error) {
    console.log('error:', error);
    return Response.json({ message: 'internal server error' }, { status: 500 });
  }
}
