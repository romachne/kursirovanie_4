from django.contrib import admin
from django.urls import include, path
from core.views import front


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('delivery.urls')),
    path("", front, name="front"),

]
