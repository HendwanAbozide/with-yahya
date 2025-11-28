import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const dataFilePath = path.join(process.cwd(), 'data', 'testimonials.json');

// Helper to read testimonials
function readTestimonials() {
    const fileContents = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(fileContents);
}

// Helper to write testimonials
function writeTestimonials(data: any[]) {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
}

// GET - Fetch all testimonials
export async function GET() {
    try {
        const testimonials = readTestimonials();

        // Sort by date (newest first)
        testimonials.sort((a: any, b: any) => {
            return new Date(b.dateSort).getTime() - new Date(a.dateSort).getTime();
        });

        // Add isRecent flag to most recent one
        if (testimonials.length > 0) {
            testimonials[0].isRecent = true;
        }

        return NextResponse.json(testimonials);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to read testimonials' }, { status: 500 });
    }
}

// POST - Add new testimonial
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const testimonials = readTestimonials();

        // Generate new ID
        const maxId = testimonials.reduce((max: number, t: any) => Math.max(max, parseInt(t.id)), 0);
        const newTestimonial = {
            ...body,
            id: String(maxId + 1),
        };

        testimonials.push(newTestimonial);
        writeTestimonials(testimonials);

        return NextResponse.json(newTestimonial, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create testimonial' }, { status: 500 });
    }
}

// PUT - Update testimonial
export async function PUT(request: Request) {
    try {
        const body = await request.json();
        const testimonials = readTestimonials();

        const index = testimonials.findIndex((t: any) => t.id === body.id);
        if (index === -1) {
            return NextResponse.json({ error: 'Testimonial not found' }, { status: 404 });
        }

        testimonials[index] = body;
        writeTestimonials(testimonials);

        return NextResponse.json(body);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update testimonial' }, { status: 500 });
    }
}

// DELETE - Remove testimonial
export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ error: 'ID required' }, { status: 400 });
        }

        const testimonials = readTestimonials();
        const filtered = testimonials.filter((t: any) => t.id !== id);

        if (filtered.length === testimonials.length) {
            return NextResponse.json({ error: 'Testimonial not found' }, { status: 404 });
        }

        writeTestimonials(filtered);

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete testimonial' }, { status: 500 });
    }
}
