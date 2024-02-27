
export default async function GetData( room: any) {
  
  const res = await fetch(`http://localhost:3001/${room}`);
  
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
