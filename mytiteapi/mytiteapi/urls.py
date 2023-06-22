# from django.conf.urls import url, include
from django.urls import re_path,include,path
from django.contrib import admin

urlpatterns = [
    re_path(r'^admin/', admin.site.urls),
    re_path(r'^api/', include('api.urls')),
    # path('api/', apis.TestApi.as_view(), name = "testapi"),
    # path('hello/', apis.HelloView.as_view()),
]