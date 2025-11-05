"use client"

import { useState, useEffect, useMemo, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Users, Search, Filter, Download, Eye, CheckCircle, XCircle, AlertCircle, Loader2 } from "lucide-react"
import { getBookings, updateBookingStatus } from "@/lib/bookings"
import { useLanguage } from "@/hooks/useLanguage"

interface Booking {
  id: string
  created_at: string
  first_name: string
  last_name: string | null
  email: string | null
  lesson_type: "beginner" | "intermediate" | "advanced" | "analysis"
  chess_level: "complete-beginner" | "beginner" | "intermediate" | "advanced" | "expert"
  lesson_date: string
  lesson_time: string
  additional_notes: string | null
  language: "ru" | "en"
  status: "pending" | "confirmed" | "cancelled" | "completed"
  updated_at: string
  telegram: string
}

export default function AdminPage() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null)
  const { language, isLoaded } = useLanguage()

  const content = useMemo(
    () => ({
      ru: {
        title: "Панель администратора",
        subtitle: "Управление заявками на уроки шахмат",
        totalBookings: "Всего заявок",
        pendingBookings: "Ожидающие",
        confirmedBookings: "Подтвержденные",
        completedBookings: "Завершенные",
        searchPlaceholder: "Поиск по имени или Telegram...",
        filterByStatus: "Фильтр по статусу",
        allStatuses: "Все статусы",
        pending: "Ожидает",
        confirmed: "Подтверждено",
        cancelled: "Отменено",
        completed: "Завершено",
        name: "Имя",
        lessonType: "Тип урока",
        chessLevel: "Уровень",
        date: "Дата",
        time: "Время",
        status: "Статус",
        actions: "Действия",
        viewDetails: "Подробнее",
        updateStatus: "Обновить статус",
        exportData: "Экспорт данных",
        backHome: "← Назад на главную",
        noBookings: "Заявок не найдено",
        loadingError: "Ошибка загрузки данных",
        bookingDetails: "Детали заявки",
        personalInfo: "Личная информация",
        lessonInfo: "Информация об уроке",
        additionalNotes: "Дополнительные заметки",
        createdAt: "Создано",
        updatedAt: "Обновлено",
        close: "Закрыть",
        lessonTypes: {
          beginner: "Для начинающих",
          intermediate: "Средний уровень",
          advanced: "Продвинутый",
          analysis: "Анализ партий",
        },
        levels: {
          "complete-beginner": "Полный новичок",
          beginner: "Начинающий",
          intermediate: "Средний",
          advanced: "Продвинутый",
          expert: "Эксперт",
        },
        telegram: "Telegram",
        email: "Email",
        notProvided: "Не указано",
      },
      en: {
        title: "Admin Dashboard",
        subtitle: "Manage chess lesson bookings",
        totalBookings: "Total Bookings",
        pendingBookings: "Pending",
        confirmedBookings: "Confirmed",
        completedBookings: "Completed",
        searchPlaceholder: "Search by name or Telegram...",
        filterByStatus: "Filter by status",
        allStatuses: "All statuses",
        pending: "Pending",
        confirmed: "Confirmed",
        cancelled: "Cancelled",
        completed: "Completed",
        name: "Name",
        lessonType: "Lesson Type",
        chessLevel: "Level",
        date: "Date",
        time: "Time",
        status: "Status",
        actions: "Actions",
        viewDetails: "View Details",
        updateStatus: "Update Status",
        exportData: "Export Data",
        backHome: "← Back to Home",
        noBookings: "No bookings found",
        loadingError: "Error loading data",
        bookingDetails: "Booking Details",
        personalInfo: "Personal Information",
        lessonInfo: "Lesson Information",
        additionalNotes: "Additional Notes",
        createdAt: "Created",
        updatedAt: "Updated",
        close: "Close",
        lessonTypes: {
          beginner: "Beginner",
          intermediate: "Intermediate",
          advanced: "Advanced",
          analysis: "Game Analysis",
        },
        levels: {
          "complete-beginner": "Complete Beginner",
          beginner: "Beginner",
          intermediate: "Intermediate",
          advanced: "Advanced",
          expert: "Expert",
        },
        telegram: "Telegram",
        email: "Email",
        notProvided: "Not provided",
      },
    }),
    [],
  )

  const loadBookings = useCallback(async () => {
    setLoading(true)
    try {
      const result = await getBookings()
      if (result.success && result.bookings) {
        setBookings(result.bookings)
      }
    } catch (error) {
      console.error("Error loading bookings:", error)
    } finally {
      setLoading(false)
    }
  }, [])

  const handleStatusUpdate = useCallback(
    async (bookingId: string, newStatus: string) => {
      try {
        const result = await updateBookingStatus(
          bookingId,
          newStatus as "pending" | "confirmed" | "cancelled" | "completed",
        )
        if (result.success) {
          // Reload bookings to reflect changes
          loadBookings()
        }
      } catch (error) {
        console.error("Error updating status:", error)
      }
    },
    [loadBookings],
  )

  const filteredBookings = useMemo(() => {
    return bookings.filter((booking) => {
      const matchesSearch =
        booking.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (booking.last_name && booking.last_name.toLowerCase().includes(searchTerm.toLowerCase())) ||
        booking.telegram.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesStatus = statusFilter === "all" || booking.status === statusFilter

      return matchesSearch && matchesStatus
    })
  }, [bookings, searchTerm, statusFilter])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "confirmed":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "completed":
        return "bg-green-100 text-green-800 border-green-200"
      case "cancelled":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <AlertCircle className="w-4 h-4" />
      case "confirmed":
        return <CheckCircle className="w-4 h-4" />
      case "completed":
        return <CheckCircle className="w-4 h-4" />
      case "cancelled":
        return <XCircle className="w-4 h-4" />
      default:
        return <AlertCircle className="w-4 h-4" />
    }
  }

  const stats = useMemo(
    () => ({
      total: bookings.length,
      pending: bookings.filter((b) => b.status === "pending").length,
      confirmed: bookings.filter((b) => b.status === "confirmed").length,
      completed: bookings.filter((b) => b.status === "completed").length,
    }),
    [bookings],
  )

  const t = content[language]

  useEffect(() => {
    loadBookings()
  }, [loadBookings])

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center">
        <div className="text-blue-100 text-xl">Loading...</div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center">
        <div className="flex items-center text-blue-100 text-xl">
          <Loader2 className="w-6 h-6 mr-2 animate-spin" />
          Loading bookings...
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-800 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">{t.title}</h1>
          <p className="text-blue-700 text-lg">{t.subtitle}</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="border-blue-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-blue-600">{t.totalBookings}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Users className="w-8 h-8 text-blue-600 mr-3" />
                <span className="text-3xl font-bold text-blue-900">{stats.total}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-yellow-600">{t.pendingBookings}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <AlertCircle className="w-8 h-8 text-yellow-600 mr-3" />
                <span className="text-3xl font-bold text-yellow-800">{stats.pending}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-blue-600">{t.confirmedBookings}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <CheckCircle className="w-8 h-8 text-blue-600 mr-3" />
                <span className="text-3xl font-bold text-blue-900">{stats.confirmed}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-green-600">{t.completedBookings}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
                <span className="text-3xl font-bold text-green-800">{stats.completed}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="border-blue-300 mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400 w-4 h-4" />
                  <Input
                    placeholder={t.searchPlaceholder}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="md:w-48">
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder={t.filterByStatus} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t.allStatuses}</SelectItem>
                    <SelectItem value="pending">{t.pending}</SelectItem>
                    <SelectItem value="confirmed">{t.confirmed}</SelectItem>
                    <SelectItem value="completed">{t.completed}</SelectItem>
                    <SelectItem value="cancelled">{t.cancelled}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bookings Table */}
        <Card className="border-blue-300">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-blue-900">
                {t.totalBookings} ({filteredBookings.length})
              </CardTitle>
              <Button variant="outline" className="border-blue-600 text-blue-600 bg-transparent">
                <Download className="w-4 h-4 mr-2" />
                {t.exportData}
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {filteredBookings.length === 0 ? (
              <div className="text-center py-8 text-blue-600">{t.noBookings}</div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>{t.name}</TableHead>
                      <TableHead>{t.telegram}</TableHead>
                      <TableHead>{t.chessLevel}</TableHead>
                      <TableHead>{t.date}</TableHead>
                      <TableHead>{t.time}</TableHead>
                      <TableHead>{t.status}</TableHead>
                      <TableHead>{t.actions}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredBookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell className="font-medium">
                          {booking.first_name} {booking.last_name || ""}
                        </TableCell>
                        <TableCell>{booking.telegram}</TableCell>
                        <TableCell>{t.levels[booking.chess_level]}</TableCell>
                        <TableCell>
                          {new Date(booking.lesson_date).toLocaleDateString(language === "ru" ? "ru-RU" : "en-US")}
                        </TableCell>
                        <TableCell>{booking.lesson_time}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className={getStatusColor(booking.status)}>
                            {getStatusIcon(booking.status)}
                            <span className="ml-1">{t[booking.status as keyof typeof t]}</span>
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setSelectedBooking(booking)}
                              className="border-blue-600 text-blue-600"
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Select
                              value={booking.status}
                              onValueChange={(value) => handleStatusUpdate(booking.id, value)}
                            >
                              <SelectTrigger className="w-32">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pending">{t.pending}</SelectItem>
                                <SelectItem value="confirmed">{t.confirmed}</SelectItem>
                                <SelectItem value="completed">{t.completed}</SelectItem>
                                <SelectItem value="cancelled">{t.cancelled}</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Booking Details Modal */}
        {selectedBooking && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white shadow-2xl">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-blue-900">{t.bookingDetails}</CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedBooking(null)}
                    className="text-blue-400 hover:text-blue-600"
                  >
                    ×
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-blue-900 mb-3">{t.personalInfo}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm text-gray-600">{t.name}:</span>
                      <p className="font-medium">
                        {selectedBooking.first_name} {selectedBooking.last_name || ""}
                      </p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">{t.telegram}:</span>
                      <p className="font-medium">{selectedBooking.telegram}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">{t.email}:</span>
                      <p className="font-medium">{selectedBooking.email || t.notProvided}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-blue-900 mb-3">{t.lessonInfo}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm text-gray-600">{t.chessLevel}:</span>
                      <p className="font-medium">{t.levels[selectedBooking.chess_level]}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">{t.date}:</span>
                      <p className="font-medium">
                        {new Date(selectedBooking.lesson_date).toLocaleDateString(
                          language === "ru" ? "ru-RU" : "en-US",
                        )}
                      </p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">{t.time}:</span>
                      <p className="font-medium">{selectedBooking.lesson_time}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">{t.status}:</span>
                      <Badge variant="outline" className={getStatusColor(selectedBooking.status)}>
                        {getStatusIcon(selectedBooking.status)}
                        <span className="ml-1">{t[selectedBooking.status as keyof typeof t]}</span>
                      </Badge>
                    </div>
                  </div>
                </div>

                {selectedBooking.additional_notes && (
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-3">{t.additionalNotes}</h3>
                    <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">{selectedBooking.additional_notes}</p>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <span>{t.createdAt}:</span>
                    <p>{new Date(selectedBooking.created_at).toLocaleString()}</p>
                  </div>
                  <div>
                    <span>{t.updatedAt}:</span>
                    <p>{new Date(selectedBooking.updated_at).toLocaleString()}</p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button onClick={() => setSelectedBooking(null)} className="bg-blue-600 hover:bg-blue-700">
                    {t.close}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
