export async function GET(req) {
  try {
    console.log('User logged out successfully');
    return new Response(JSON.stringify({ message: 'Logout successful' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Logout error:', error.message);
    return new Response(JSON.stringify({ error: 'Logout failed' }), {
      status: 500,
    });
  }
}