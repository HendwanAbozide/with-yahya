"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Edit, Trash2, Save, X } from "lucide-react"

export default function TestimonialsAdmin() {
    const [isAuthed, setIsAuthed] = useState(false)
    const [password, setPassword] = useState("")
    const [testimonials, setTestimonials] = useState<any[]>([])
    const [editingId, setEditingId] = useState<string | null>(null)
    const [isAdding, setIsAdding] = useState(false)
    const [formData, setFormData] = useState({
        type: "topmate",
        rating: 5,
        text: "",
        name: "",
        date: "",
        dateSort: "",
        country: "",
        role: "",
        badges: [],
        avatar: "",
    })

    // Check password
    const handleAuth = () => {
        if (password === "admin123") {  // Change this in production!
            setIsAuthed(true)
            fetchTestimonials()
        } else {
            alert("Incorrect password")
        }
    }

    // Fetch testimonials
    const fetchTestimonials = async () => {
        const res = await fetch("/api/testimonials")
        const data = await res.json()
        setTestimonials(data)
    }

    // Add testimonial
    const handleAdd = async () => {
        // Auto-generate avatar for Topmate
        if (formData.type === "topmate" && !formData.avatar) {
            const initials = formData.name.split(" ").map(n => n[0]).join("")
            formData.avatar = `https://api.dicebear.com/7.x/initials/svg?seed=${initials}&backgroundColor=3b82f6`
        }

        await fetch("/api/testimonials", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })

        setIsAdding(false)
        resetForm()
        fetchTestimonials()
    }

    // Update testimonial
    const handleUpdate = async (id: string) => {
        const testimonial = testimonials.find(t => t.id === id)
        await fetch("/api/testimonials", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(testimonial),
        })

        setEditingId(null)
        fetchTestimonials()
    }

    // Delete testimonial
    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this review?")) return

        await fetch(`/api/testimonials?id=${id}`, {
            method: "DELETE",
        })

        fetchTestimonials()
    }

    const resetForm = () => {
        setFormData({
            type: "topmate",
            rating: 5,
            text: "",
            name: "",
            date: "",
            dateSort: "",
            country: "",
            role: "",
            badges: [],
            avatar: "",
        })
    }

    if (!isAuthed) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <Card className="w-full max-w-md">
                    <CardHeader>
                        <CardTitle>Admin Access</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleAuth()}
                        />
                        <Button onClick={handleAuth} className="w-full">
                            Login
                        </Button>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-background p-6">
            <div className="container mx-auto max-w-6xl">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">Testimonials Admin</h1>
                    <Button onClick={() => setIsAdding(true)}>
                        <Plus className="mr-2 h-4 w-4" />
                        Add Review
                    </Button>
                </div>

                {isAdding && (
                    <Card className="mb-6">
                        <CardHeader>
                            <CardTitle>Add New Testimonial</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-medium">Type</label>
                                    <select
                                        className="w-full border rounded px-3 py-2"
                                        value={formData.type}
                                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                    >
                                        <option value="topmate">Topmate</option>
                                        <option value="adplist">ADPList</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-sm font-medium">Rating</label>
                                    <Input
                                        type="number"
                                        min="1"
                                        max="5"
                                        value={formData.rating}
                                        onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-medium">Review Text (use &lt;strong&gt; for bold)</label>
                                <Textarea
                                    rows={4}
                                    value={formData.text}
                                    onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                                    placeholder="Enter review text..."
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-medium">Name</label>
                                    <Input
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium">Display Date</label>
                                    <Input
                                        value={formData.date}
                                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                        placeholder="e.g., 3rd Nov, 2024"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-medium">Sort Date (YYYY-MM-DD)</label>
                                <Input
                                    type="date"
                                    value={formData.dateSort}
                                    onChange={(e) => setFormData({ ...formData, dateSort: e.target.value })}
                                />
                            </div>

                            {formData.type === "adplist" && (
                                <>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-sm font-medium">Country Flag</label>
                                            <Input
                                                value={formData.country}
                                                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                                                placeholder="🇪🇬"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium">Role</label>
                                            <Input
                                                value={formData.role}
                                                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium">Avatar URL</label>
                                        <Input
                                            value={formData.avatar}
                                            onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
                                        />
                                    </div>
                                </>
                            )}

                            <div className="flex gap-2">
                                <Button onClick={handleAdd}>
                                    <Save className="mr-2 h-4 w-4" />
                                    Save
                                </Button>
                                <Button variant="outline" onClick={() => { setIsAdding(false); resetForm(); }}>
                                    <X className="mr-2 h-4 w-4" />
                                    Cancel
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                )}

                <div className="space-y-4">
                    {testimonials.map((testimonial) => (
                        <Card key={testimonial.id}>
                            <CardContent className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                                        <p className="text-sm text-muted-foreground">{testimonial.date} · {testimonial.type}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <Button size="sm" variant="outline" onClick={() => setEditingId(testimonial.id)}>
                                            <Edit className="h-4 w-4" />
                                        </Button>
                                        <Button size="sm" variant="destructive" onClick={() => handleDelete(testimonial.id)}>
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                                <p className="text-sm" dangerouslySetInnerHTML={{ __html: testimonial.text }} />
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
