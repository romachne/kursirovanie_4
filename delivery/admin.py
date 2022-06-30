from django.contrib import admin
from .models import Restaurant
from import_export.admin import ExportActionMixin


class RestaurantAdmin(ExportActionMixin, admin.ModelAdmin):
    ...


admin.site.register(Restaurant, RestaurantAdmin)
